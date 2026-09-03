# `dataAwsccGlueIntegrationResourceProperty` Submodule <a name="`dataAwsccGlueIntegrationResourceProperty` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueIntegrationResourceProperty <a name="DataAwsccGlueIntegrationResourceProperty" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/glue_integration_resource_property awscc_glue_integration_resource_property}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer"></a>

```typescript
import { dataAwsccGlueIntegrationResourceProperty } from '@cdktn/provider-awscc'

new dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty(scope: Construct, id: string, config: DataAwsccGlueIntegrationResourcePropertyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig">DataAwsccGlueIntegrationResourcePropertyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig">DataAwsccGlueIntegrationResourcePropertyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGlueIntegrationResourceProperty resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isConstruct"></a>

```typescript
import { dataAwsccGlueIntegrationResourceProperty } from '@cdktn/provider-awscc'

dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformElement"></a>

```typescript
import { dataAwsccGlueIntegrationResourceProperty } from '@cdktn/provider-awscc'

dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformDataSource"></a>

```typescript
import { dataAwsccGlueIntegrationResourceProperty } from '@cdktn/provider-awscc'

dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport"></a>

```typescript
import { dataAwsccGlueIntegrationResourceProperty } from '@cdktn/provider-awscc'

dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccGlueIntegrationResourceProperty resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGlueIntegrationResourceProperty to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGlueIntegrationResourceProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/glue_integration_resource_property#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueIntegrationResourceProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.resourcePropertyArn">resourcePropertyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.sourceProcessingProperties">sourceProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference">DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList">DataAwsccGlueIntegrationResourcePropertyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.targetProcessingProperties">targetProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference">DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `resourcePropertyArn`<sup>Required</sup> <a name="resourcePropertyArn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.resourcePropertyArn"></a>

```typescript
public readonly resourcePropertyArn: string;
```

- *Type:* string

---

##### `sourceProcessingProperties`<sup>Required</sup> <a name="sourceProcessingProperties" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.sourceProcessingProperties"></a>

```typescript
public readonly sourceProcessingProperties: DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference">DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.tags"></a>

```typescript
public readonly tags: DataAwsccGlueIntegrationResourcePropertyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList">DataAwsccGlueIntegrationResourcePropertyTagsList</a>

---

##### `targetProcessingProperties`<sup>Required</sup> <a name="targetProcessingProperties" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.targetProcessingProperties"></a>

```typescript
public readonly targetProcessingProperties: DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference">DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueIntegrationResourcePropertyConfig <a name="DataAwsccGlueIntegrationResourcePropertyConfig" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.Initializer"></a>

```typescript
import { dataAwsccGlueIntegrationResourceProperty } from '@cdktn/provider-awscc'

const dataAwsccGlueIntegrationResourcePropertyConfig: dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/glue_integration_resource_property#id DataAwsccGlueIntegrationResourceProperty#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties <a name="DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties.Initializer"></a>

```typescript
import { dataAwsccGlueIntegrationResourceProperty } from '@cdktn/provider-awscc'

const dataAwsccGlueIntegrationResourcePropertySourceProcessingProperties: dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties = { ... }
```


### DataAwsccGlueIntegrationResourcePropertyTags <a name="DataAwsccGlueIntegrationResourcePropertyTags" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTags.Initializer"></a>

```typescript
import { dataAwsccGlueIntegrationResourceProperty } from '@cdktn/provider-awscc'

const dataAwsccGlueIntegrationResourcePropertyTags: dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTags = { ... }
```


### DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties <a name="DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties.Initializer"></a>

```typescript
import { dataAwsccGlueIntegrationResourceProperty } from '@cdktn/provider-awscc'

const dataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties: dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference <a name="DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueIntegrationResourceProperty } from '@cdktn/provider-awscc'

new dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties">DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties">DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties</a>

---


### DataAwsccGlueIntegrationResourcePropertyTagsList <a name="DataAwsccGlueIntegrationResourcePropertyTagsList" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer"></a>

```typescript
import { dataAwsccGlueIntegrationResourceProperty } from '@cdktn/provider-awscc'

new dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.get"></a>

```typescript
public get(index: number): DataAwsccGlueIntegrationResourcePropertyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccGlueIntegrationResourcePropertyTagsOutputReference <a name="DataAwsccGlueIntegrationResourcePropertyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueIntegrationResourceProperty } from '@cdktn/provider-awscc'

new dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTags">DataAwsccGlueIntegrationResourcePropertyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueIntegrationResourcePropertyTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTags">DataAwsccGlueIntegrationResourcePropertyTags</a>

---


### DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference <a name="DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueIntegrationResourceProperty } from '@cdktn/provider-awscc'

new dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArn">eventBusArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArn">kmsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties">DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArn"></a>

```typescript
public readonly eventBusArn: string;
```

- *Type:* string

---

##### `kmsArn`<sup>Required</sup> <a name="kmsArn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArn"></a>

```typescript
public readonly kmsArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties">DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties</a>

---



