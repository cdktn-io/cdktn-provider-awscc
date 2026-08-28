# `cognitoLogDeliveryConfiguration` Submodule <a name="`cognitoLogDeliveryConfiguration` Submodule" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoLogDeliveryConfiguration <a name="CognitoLogDeliveryConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration awscc_cognito_log_delivery_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer"></a>

```typescript
import { cognitoLogDeliveryConfiguration } from '@cdktn/provider-awscc'

new cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration(scope: Construct, id: string, config: CognitoLogDeliveryConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig">CognitoLogDeliveryConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig">CognitoLogDeliveryConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.putLogConfigurations">putLogConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.resetLogConfigurations">resetLogConfigurations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogConfigurations` <a name="putLogConfigurations" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.putLogConfigurations"></a>

```typescript
public putLogConfigurations(value: IResolvable | CognitoLogDeliveryConfigurationLogConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.putLogConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations">CognitoLogDeliveryConfigurationLogConfigurations</a>[]

---

##### `resetLogConfigurations` <a name="resetLogConfigurations" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.resetLogConfigurations"></a>

```typescript
public resetLogConfigurations(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoLogDeliveryConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isConstruct"></a>

```typescript
import { cognitoLogDeliveryConfiguration } from '@cdktn/provider-awscc'

cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformElement"></a>

```typescript
import { cognitoLogDeliveryConfiguration } from '@cdktn/provider-awscc'

cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformResource"></a>

```typescript
import { cognitoLogDeliveryConfiguration } from '@cdktn/provider-awscc'

cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport"></a>

```typescript
import { cognitoLogDeliveryConfiguration } from '@cdktn/provider-awscc'

cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CognitoLogDeliveryConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoLogDeliveryConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoLogDeliveryConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitoLogDeliveryConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.logConfigurations">logConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList">CognitoLogDeliveryConfigurationLogConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.logDeliveryConfigurationId">logDeliveryConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.logConfigurationsInput">logConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations">CognitoLogDeliveryConfigurationLogConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logConfigurations`<sup>Required</sup> <a name="logConfigurations" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.logConfigurations"></a>

```typescript
public readonly logConfigurations: CognitoLogDeliveryConfigurationLogConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList">CognitoLogDeliveryConfigurationLogConfigurationsList</a>

---

##### `logDeliveryConfigurationId`<sup>Required</sup> <a name="logDeliveryConfigurationId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.logDeliveryConfigurationId"></a>

```typescript
public readonly logDeliveryConfigurationId: string;
```

- *Type:* string

---

##### `logConfigurationsInput`<sup>Optional</sup> <a name="logConfigurationsInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.logConfigurationsInput"></a>

```typescript
public readonly logConfigurationsInput: IResolvable | CognitoLogDeliveryConfigurationLogConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations">CognitoLogDeliveryConfigurationLogConfigurations</a>[]

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoLogDeliveryConfigurationConfig <a name="CognitoLogDeliveryConfigurationConfig" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.Initializer"></a>

```typescript
import { cognitoLogDeliveryConfiguration } from '@cdktn/provider-awscc'

const cognitoLogDeliveryConfigurationConfig: cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.userPoolId">userPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#user_pool_id CognitoLogDeliveryConfiguration#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.logConfigurations">logConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations">CognitoLogDeliveryConfigurationLogConfigurations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#log_configurations CognitoLogDeliveryConfiguration#log_configurations}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#user_pool_id CognitoLogDeliveryConfiguration#user_pool_id}.

---

##### `logConfigurations`<sup>Optional</sup> <a name="logConfigurations" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.logConfigurations"></a>

```typescript
public readonly logConfigurations: IResolvable | CognitoLogDeliveryConfigurationLogConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations">CognitoLogDeliveryConfigurationLogConfigurations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#log_configurations CognitoLogDeliveryConfiguration#log_configurations}.

---

### CognitoLogDeliveryConfigurationLogConfigurations <a name="CognitoLogDeliveryConfigurationLogConfigurations" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.Initializer"></a>

```typescript
import { cognitoLogDeliveryConfiguration } from '@cdktn/provider-awscc'

const cognitoLogDeliveryConfigurationLogConfigurations: cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.cloudwatchLogsConfiguration">cloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#cloudwatch_logs_configuration CognitoLogDeliveryConfiguration#cloudwatch_logs_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.eventSource">eventSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#event_source CognitoLogDeliveryConfiguration#event_source}. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.firehoseConfiguration">firehoseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#firehose_configuration CognitoLogDeliveryConfiguration#firehose_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.logLevel">logLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#log_level CognitoLogDeliveryConfiguration#log_level}. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration">CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#s3_configuration CognitoLogDeliveryConfiguration#s3_configuration}. |

---

##### `cloudwatchLogsConfiguration`<sup>Optional</sup> <a name="cloudwatchLogsConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.cloudwatchLogsConfiguration"></a>

```typescript
public readonly cloudwatchLogsConfiguration: CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#cloudwatch_logs_configuration CognitoLogDeliveryConfiguration#cloudwatch_logs_configuration}.

---

##### `eventSource`<sup>Optional</sup> <a name="eventSource" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.eventSource"></a>

```typescript
public readonly eventSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#event_source CognitoLogDeliveryConfiguration#event_source}.

---

##### `firehoseConfiguration`<sup>Optional</sup> <a name="firehoseConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.firehoseConfiguration"></a>

```typescript
public readonly firehoseConfiguration: CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#firehose_configuration CognitoLogDeliveryConfiguration#firehose_configuration}.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#log_level CognitoLogDeliveryConfiguration#log_level}.

---

##### `s3Configuration`<sup>Optional</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration">CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#s3_configuration CognitoLogDeliveryConfiguration#s3_configuration}.

---

### CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration <a name="CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration.Initializer"></a>

```typescript
import { cognitoLogDeliveryConfiguration } from '@cdktn/provider-awscc'

const cognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration: cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#log_group_arn CognitoLogDeliveryConfiguration#log_group_arn}. |

---

##### `logGroupArn`<sup>Optional</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#log_group_arn CognitoLogDeliveryConfiguration#log_group_arn}.

---

### CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration <a name="CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration.Initializer"></a>

```typescript
import { cognitoLogDeliveryConfiguration } from '@cdktn/provider-awscc'

const cognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration: cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration.property.streamArn">streamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#stream_arn CognitoLogDeliveryConfiguration#stream_arn}. |

---

##### `streamArn`<sup>Optional</sup> <a name="streamArn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#stream_arn CognitoLogDeliveryConfiguration#stream_arn}.

---

### CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration <a name="CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration.Initializer"></a>

```typescript
import { cognitoLogDeliveryConfiguration } from '@cdktn/provider-awscc'

const cognitoLogDeliveryConfigurationLogConfigurationsS3Configuration: cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration.property.bucketArn">bucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#bucket_arn CognitoLogDeliveryConfiguration#bucket_arn}. |

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#bucket_arn CognitoLogDeliveryConfiguration#bucket_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference <a name="CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer"></a>

```typescript
import { cognitoLogDeliveryConfiguration } from '@cdktn/provider-awscc'

new cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.resetLogGroupArn">resetLogGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroupArn` <a name="resetLogGroupArn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.resetLogGroupArn"></a>

```typescript
public resetLogGroupArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.logGroupArnInput"></a>

```typescript
public readonly logGroupArnInput: string;
```

- *Type:* string

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration</a>

---


### CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference <a name="CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer"></a>

```typescript
import { cognitoLogDeliveryConfiguration } from '@cdktn/provider-awscc'

new cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resetStreamArn">resetStreamArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStreamArn` <a name="resetStreamArn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resetStreamArn"></a>

```typescript
public resetStreamArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.streamArnInput"></a>

```typescript
public readonly streamArnInput: string;
```

- *Type:* string

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration</a>

---


### CognitoLogDeliveryConfigurationLogConfigurationsList <a name="CognitoLogDeliveryConfigurationLogConfigurationsList" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer"></a>

```typescript
import { cognitoLogDeliveryConfiguration } from '@cdktn/provider-awscc'

new cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.get"></a>

```typescript
public get(index: number): CognitoLogDeliveryConfigurationLogConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations">CognitoLogDeliveryConfigurationLogConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoLogDeliveryConfigurationLogConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations">CognitoLogDeliveryConfigurationLogConfigurations</a>[]

---


### CognitoLogDeliveryConfigurationLogConfigurationsOutputReference <a name="CognitoLogDeliveryConfigurationLogConfigurationsOutputReference" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer"></a>

```typescript
import { cognitoLogDeliveryConfiguration } from '@cdktn/provider-awscc'

new cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putCloudwatchLogsConfiguration">putCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putFirehoseConfiguration">putFirehoseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putS3Configuration">putS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetCloudwatchLogsConfiguration">resetCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetEventSource">resetEventSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetFirehoseConfiguration">resetFirehoseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetS3Configuration">resetS3Configuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogsConfiguration` <a name="putCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putCloudwatchLogsConfiguration"></a>

```typescript
public putCloudwatchLogsConfiguration(value: CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putCloudwatchLogsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration</a>

---

##### `putFirehoseConfiguration` <a name="putFirehoseConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putFirehoseConfiguration"></a>

```typescript
public putFirehoseConfiguration(value: CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putFirehoseConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration</a>

---

##### `putS3Configuration` <a name="putS3Configuration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putS3Configuration"></a>

```typescript
public putS3Configuration(value: CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration">CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration</a>

---

##### `resetCloudwatchLogsConfiguration` <a name="resetCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetCloudwatchLogsConfiguration"></a>

```typescript
public resetCloudwatchLogsConfiguration(): void
```

##### `resetEventSource` <a name="resetEventSource" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetEventSource"></a>

```typescript
public resetEventSource(): void
```

##### `resetFirehoseConfiguration` <a name="resetFirehoseConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetFirehoseConfiguration"></a>

```typescript
public resetFirehoseConfiguration(): void
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetLogLevel"></a>

```typescript
public resetLogLevel(): void
```

##### `resetS3Configuration` <a name="resetS3Configuration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetS3Configuration"></a>

```typescript
public resetS3Configuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.cloudwatchLogsConfiguration">cloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference">CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.firehoseConfiguration">firehoseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference">CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference">CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.cloudwatchLogsConfigurationInput">cloudwatchLogsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.eventSourceInput">eventSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.firehoseConfigurationInput">firehoseConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.s3ConfigurationInput">s3ConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration">CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.eventSource">eventSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations">CognitoLogDeliveryConfigurationLogConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogsConfiguration`<sup>Required</sup> <a name="cloudwatchLogsConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.cloudwatchLogsConfiguration"></a>

```typescript
public readonly cloudwatchLogsConfiguration: CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference">CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference</a>

---

##### `firehoseConfiguration`<sup>Required</sup> <a name="firehoseConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.firehoseConfiguration"></a>

```typescript
public readonly firehoseConfiguration: CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference">CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference</a>

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference">CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference</a>

---

##### `cloudwatchLogsConfigurationInput`<sup>Optional</sup> <a name="cloudwatchLogsConfigurationInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.cloudwatchLogsConfigurationInput"></a>

```typescript
public readonly cloudwatchLogsConfigurationInput: IResolvable | CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration</a>

---

##### `eventSourceInput`<sup>Optional</sup> <a name="eventSourceInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.eventSourceInput"></a>

```typescript
public readonly eventSourceInput: string;
```

- *Type:* string

---

##### `firehoseConfigurationInput`<sup>Optional</sup> <a name="firehoseConfigurationInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.firehoseConfigurationInput"></a>

```typescript
public readonly firehoseConfigurationInput: IResolvable | CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration</a>

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.logLevelInput"></a>

```typescript
public readonly logLevelInput: string;
```

- *Type:* string

---

##### `s3ConfigurationInput`<sup>Optional</sup> <a name="s3ConfigurationInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.s3ConfigurationInput"></a>

```typescript
public readonly s3ConfigurationInput: IResolvable | CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration">CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration</a>

---

##### `eventSource`<sup>Required</sup> <a name="eventSource" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.eventSource"></a>

```typescript
public readonly eventSource: string;
```

- *Type:* string

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoLogDeliveryConfigurationLogConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations">CognitoLogDeliveryConfigurationLogConfigurations</a>

---


### CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference <a name="CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { cognitoLogDeliveryConfiguration } from '@cdktn/provider-awscc'

new cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resetBucketArn">resetBucketArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketArn` <a name="resetBucketArn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resetBucketArn"></a>

```typescript
public resetBucketArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration">CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.bucketArnInput"></a>

```typescript
public readonly bucketArnInput: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration">CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration</a>

---



